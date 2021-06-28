import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editItems } from '../../store/video';

export default function EditVideoForm(){
    const video = useSelector(state => state.video.vidList.id)
    const dispatch = useDispatch();

    const [title, setTitle] = useState(video.title)

    const updateTitle = (e) => setTitle(e.target.value)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {title};

        const updatedVideo = await dispatch(editItems(data));
        
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
  