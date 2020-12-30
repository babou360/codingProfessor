import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogsStart, deleteBlogStart } from './../../redux/Blogs/blogs.actions';
import { Link } from 'react-router-dom';
import Button from './../../components/forms/Button'
import { Moment } from 'react-moment';
import Blog from './../../uploads/blog';
import './new-admin.css';

const mapState = ({ blogsData }) => ({
    blogs: blogsData.blogs
});

const NewAdmin = () => {
    const { blogs } = useSelector(mapState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchBlogsStart()
        );

    }, []);

    return (
        <div className='admin'>

            <div className='upload'>
                <Blog />
            </div>
            <div className='blogs'>
                <div className='manage'>Manage Blogs</div>
                {blogs.map((blog, index) => {
                    const {
                        title,
                        description,
                        image,
                        timestamp,
                        documentID
                    } = blog;
                    if (blogs.length < 1) return <h1>No Data</h1>
                    return (
                        <div className='blog-mother'>
                            <Link to={`/blog/${documentID}`}>
                                <div key={index} className='single'>
                                    <Link to={`/blog/${documentID}`}>
                                        <img className='image-blog' src={image} />
                                    </Link>
                                    <div className='other'>
                                        <h1 className='title'>{title}</h1>
                                        <div className='time-owner'>
                                            <p>Babou360</p>
                                            <p>|</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Button onClick={() => dispatch(deleteBlogStart(documentID))}>
                                Delete
                            </Button>
                            <hr className='hr' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default NewAdmin;