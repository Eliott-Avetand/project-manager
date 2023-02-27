import styles from './CreateUsers.module.scss';
import ImageUploading from 'react-images-uploading';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '@actions/users.actions';

const CreateUsers = () => {
    const dispatch = useDispatch();

    const [image, setImage] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [role, setRole] = useState('user');

    const createUser = () => {
        const data = new FormData();

        data.append('file', image[0].file);
        console.log(data);
        const data2 = {
            username: username,
            role: role,
            title: title,
            email: email,
        }

        // dispatch(userActions.create(data2));
        dispatch(userActions.setProfilePicture(data, 9));
    }

    return (
        <div className={styles.createUsers}>
            <div className={styles.box}>
                <h1>Nouvel Utilisateur</h1>
                <div className={styles.upload}>
                    <ImageUploading className={styles.upload} value={image} onChange={(imageList) => setImage(imageList)} maxNumber={1} dataURLKey="data_url">
                        {({ imageList, onImageUpload, onImageUpdate, onImageRemove, dragProps }) => (
                            <div className={styles.Imagewrapper}>
                                {imageList.map((image, index) => (
                                    <div key={index} className={styles.imageItem}>
                                        <img src={image['data_url']} alt="" />
                                        <div className={styles.imageBtns}>
                                            <input type='button' value='change' onClick={() => onImageUpdate(index)} />
                                            <input type='button' value='remove' onClick={() => onImageRemove(index)} />
                                        </div>
                                    </div>
                                ))}
                                <input
                                    type='button'
                                    value="upload picture"
                                    onClick={onImageUpload}
                                    style={imageList.length >= 1 ? { "display": 'none' } : { "display": 'block' }}
                                    {...dragProps}
                                />
                            </div>
                        )}
                    </ImageUploading>
                </div>
                <label>
                    Nom
                    <input type="text" placeholder='John' value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Email
                    <input type="text" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Titre
                    <input type="text" placeholder="L'ingénieur" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Rôle
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Créer un utilisateur" className={styles.button} onClick={createUser} />
            </div>
        </div>
    );
}

export default CreateUsers;
