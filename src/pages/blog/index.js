
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogsStart } from './../../redux/Blogs/blogs.actions';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import './styles.css';

const mapState = ({ blogsData }) => ({
    blogs: blogsData.blogs
});

const Blog = props => {
    const { blogs } = useSelector(mapState);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        dispatch(
            fetchBlogsStart()
        );

    }, []);

    return (
        <div >
            <div className="projects">
                {blogs.map((blog, index) => {
                    const {
                        title,
                        subTitle,
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
                                        <img className='image' src={image} />
                                    </Link>
                                    <div className='other'>
                                        <h1 className='title-blog'>{title}</h1>
                                        <p className='subtitle'>{subTitle}</p>
                                        <div className='time-owner'>
                                            <p>Babou360</p>
                                            <p>|</p>
                                            <Moment className='moment' fromNow>{timestamp.toDate()}</Moment>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <hr className='hr'/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog;