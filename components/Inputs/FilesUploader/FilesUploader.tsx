import {useState, DragEvent} from 'react'
import inputsType from '../../../constants/inputsType';
import classes from './FilesUploader.module.scss';

type Props = {

    readonly className?: string,
    readonly color: string,
    readonly name: string,
    readonly placeholder?: string,
    readonly type: string,
    readonly image?: string

}

const FilesUploader = ({className, color, placeholder, name, type, image}:Props) => {

    const [drag, setDrag] = useState(false);
    const [countFiles, setCountFiles] = useState(0);
    function FileListItems(files: FileList)
    {
        let b = new ClipboardEvent("").clipboardData || new DataTransfer()
        for (let i = 0, len = files.length; i<len; i++) b.items.add(files[i])
        return b.files
    }
    const onDragStart = (e: DragEvent<HTMLDivElement|HTMLLabelElement>) =>{
        
        e.preventDefault();
        setDrag(true);

    }
    const onDragLeave = (e: DragEvent<HTMLDivElement|HTMLLabelElement>) =>{

        e.preventDefault();
        setDrag(false);

    }
    const onDrop = (e: DragEvent<HTMLDivElement|HTMLLabelElement>) =>{

        e.preventDefault();
        if (e.dataTransfer !== null)
        {

            let files: FileList = e.dataTransfer.files;
            console.log(files);
            const fileInput = document.getElementsByName(name);
            const fileUploader = fileInput[0] as HTMLInputElement;
            let  fileList: FileList | null = fileUploader.files;
            fileList = FileListItems(files);console.log(files.length)
            setDrag(false);
            setCountFiles(files.length);
        }
    }
    const changeInputFile = () => {

        const files = document.getElementsByName(name);
        const fileUploader = files[0] as HTMLInputElement;
        const fileList: FileList | null = fileUploader.files;
        if (fileList !== null)
            setCountFiles(fileList.length);
    }
    const image_profile = <img src={`/icons/${image}_${color}.svg`}/>
    return (
        <div className={classes[`wrap_${type}_${color}`] + ' ' + className}>
            <input 
            onChange={changeInputFile} 
            name={name} 
            id={classes.file} 
            type='file' 
            multiple={true}
            />
            {placeholder? <div className={classes.placeholder}>{placeholder}</div> : ''}
            {
                drag? 
                <div className={classes.drag}
                     onDragStart={onDragStart}
                     onDragLeave={onDragLeave}
                     onDragOver={onDragStart}
                     onDrop={onDrop}
                >{(type != inputsType.file_uploader.TEXT)?
                    image_profile
                    :
                    'Отпустите файлы, чтобы загрузить их'}</div>
                :
                <label htmlFor={classes.file} className={classes.drop}
                     onDragStart={onDragStart}
                     onDragLeave={onDragLeave}
                     onDragOver={onDragStart}
                >{(type != inputsType.file_uploader.TEXT)?
                    image_profile
                    : 
                    countFiles? countFiles + ' файла': 'Перетащите файлы, чтобы загрузить их'}</label>
            }
        </div>
    )
}

export default FilesUploader;