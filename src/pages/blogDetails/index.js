import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {fetchBlogStart,setBlog} from './../../redux/Blogs/blogs.actions';
import Moment from 'react-moment';
import {dateFormat} from 'dateformat';
import './styles.css';

const mapState = state => ({
    blog: state.blogsData.blog
});
const BlogDetails = ({}) => {
    const {blog} = useSelector(mapState);
    const dispatch = useDispatch();
    const {blogID} = useParams();

    const {
        title,
        subTitle,
        image,
        timestamp,
        description,
    }= blog;

    useEffect(() => {
        dispatch(fetchBlogStart(blogID))
        return () => {
            dispatch(setBlog({}))
        }
    },[])
    
    return (
        <div className='desc'>
            <h1 className='title-blogger'>{title}</h1>
            <p className='subtitle'>{subTitle}</p>
            {/* <div className='date'>
                <p>Babou360 | </p>
                <p>Coding Professor</p>
                <p>{new Date(timestamp * 1000).toLocaleDateString("en-US")}</p>
            </div> */}
            <div className='second'>
            <img className='desc-Image' src={image}/>
            <p className='maelezo' dangerouslySetInnerHTML={{__html: description,}}/>
            </div> 
        </div>
    );
}

export default BlogDetails;