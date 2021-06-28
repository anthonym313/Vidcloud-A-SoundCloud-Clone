import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { editItems } from '../../store/video';

export default function EditVideoForm({videoId}){
    const dispatch = useDispatch();

    const [title, setTitle] = useState(videoId,title)

    const updateTitle = (e) => setTitle(e.target.value)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {title};
        await dispatch(editItems(data));
    }

    return(
        <section className="edit-video-form_container">
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='title'
                    value={title}
                    onChange={updateTitle}
                >
                </input>
            </form>
        </section>
    )
    
}
  