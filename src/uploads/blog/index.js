import React, {useState} from 'react';
import Form from './../../components/forms/FormInput';
import Button from './../../components/forms/Button';
import {storage,firestore} from './../../firebase/utils';
import Editor from 'ckeditor4-react';
import './styles.scss';

const BlogUpload = props => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if(image){
          setLoading(true)
          const storageRef = storage.ref().child(`images/${image.name}`);
    
                storageRef.put(image).on(
                    "state_changed",
                    (snap) => {
                        // track the upload progress
                        let percentage =
                            Math.round(
                            (snap.bytesTransferred / snap.totalBytes) * 100
                        );
                        setProgress(percentage);
                    },
                    (err) => {
                        setError(err);
                    },
                    async () => {
                        const timestamp = new Date();
                        const downloadUrl = await storageRef.getDownloadURL()
                        .then(url => {
                            firestore
                            .collection('blogs')
                            .add({
                                timestamp,
                                image: url,
                                title,
                                subTitle,
                                description,
                            })
                        })
    
                        // save the url to local state
                        // setUrl(downloadUrl);
                        setLoading(false);
                        setTitle('');
                        setSubTitle('');
                        setDescription('');
                        setImage(null)
                    }
                );
        }
      }
      
   const chooseImage = (e) => {
        if (e.target.files || e.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            //   setImage(e.target.result)
            setImage(reader.result)
          };
          reader.readAsDataURL(e.target.files[0]);
        }
      }
      const read = (e) => {
          if(e.target.files[0]){
            let reader = new FileReader(); 
            reader.onload = (e) => {
                setImage(URL.createObjectURL(e.target.files[0]))
            }; 
            reader.readAsDataURL(e.target.files[0]);
          }
      }

const  handleChange= (e) => {
     setImage(e.target.files[0]);
    //setImage(URL.createObjectURL(e.target.files[0]))
  }


    return < div>
    <form onSubmit={submit}>
        <div className='blog'>
            <img src={image? image : null} />
        <input type="file" onChange={handleChange} />
        <Form
        label='Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        <Form
        label='SubTitle'
        value={subTitle}
        onChange={e => setSubTitle(e.target.value)}
        />
        <Editor
        onChange={e => setDescription(e.editor.getData())}
        />
        <br/>
        <Button type="submit">{isLoading ?"Loading" : "Upload"}</Button>
        </div>
    </form>
    </div>
}
export default BlogUpload;