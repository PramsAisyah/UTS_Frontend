import {useState} from 'react';

const From = () => {
    const [gambar, setGambar] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const simpan = () =>{
        setGambar('')
        setTitle('')
        setContent('')
    }
    return ( 
        <div className="container border p-4">
            <label htmlFor="gambar" className="mb-2 me-2">
                <input type="text" className="form-control"
                placeholder="gambar" id="gambar" value={gambar}
                onChage={(e)=>setGambar(e.target.value)}/>
            </label>

            <label htmlFor="title" className="mb-2 me-2">
                <input type="text" className="form-control"
                placeholder="title" id="title" value={title}
                onChage={(e)=>setTitle(e.target.value)}/>
            </label>

            <label htmlFor="content" className="mb-2 me-2">
                <input type="text" className="form-control"
                placeholder="content" id="content" value={content}
                onChage={(e)=>setContent(e.target.value)}/>
            </label>
            <div className="d-flex-row-reverse mt-4">
                <button className="btn btn-primary"
                onClick={simpan}>simpan</button>
            </div>
        </div>
     );
}
 
export default From;