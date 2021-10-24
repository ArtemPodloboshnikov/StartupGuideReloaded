import {useState, DragEvent} from 'react'
import inputsType from '../../../constants/inputsType';
import classes from './FilesUploader.module.scss';

type Props = {

    readonly className?: string,
    readonly color: string,
    readonly name: string,
    readonly placeholder?: string,
    readonly type: string,
    readonly image?: string,
    readonly idImage?: string,
    readonly style?: {}

}

const FilesUploader = ({className, color, placeholder, name, idImage, type, image, style}:Props) => {
    
    const [drag, setDrag] = useState(false);
    const [countFiles, setCountFiles] = useState(0);
    const [styleImage, setStyleImage] = useState({});
    const inlineStyleAvatar = {width: '100%', borderRadius: '50%'};
    const id_file_input = Math.random();
    const image_profile = <img 
                          style={styleImage}
                          src={`/icons/${image}_${color}.svg`} 
                          id={idImage}/>
    console.log(idImage)

    function previewFile(file: FileList, id_img: string)
    {
        
        let reader = new FileReader()
        reader.onload = () => {
            let img: any = document.getElementById(id_img)
            img.src = reader.result
        }
    
        reader.readAsDataURL(file[0])
    }

    function FileListItems(files: FileList)
    {
        let b = new ClipboardEvent("").clipboardData || new DataTransfer()
        for (let i = 0, len = files.length; i<len; i++) b.items.add(files[i])
        return b.files
    }
    const onDragStart = (e: DragEvent<HTMLDivElement|HTMLLabelElement>) =>{
        
        e.preventDefault();
        setDrag(true);
        setStyleImage({})


    }
    const onDragLeave = (e: DragEvent<HTMLDivElement|HTMLLabelElement>) =>{

        e.preventDefault();
        setDrag(false);
        setStyleImage({})

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
            fileList = FileListItems(files);
            if (idImage !== undefined)
            {
                previewFile(fileList, idImage)
                setStyleImage(inlineStyleAvatar)
            }
            setDrag(false);
            setCountFiles(files.length);
        }
    }
    const changeInputFile = () => {

        const files = document.getElementsByName(name);
        const fileUploader = files[0] as HTMLInputElement;
        const fileList: FileList | null = fileUploader.files;
       
        if (fileList !== null && fileList.length != 0)
        {
            console.log(fileList);
            console.log(idImage);
            if (idImage !== undefined)
            {
                previewFile(fileList, idImage)
                setStyleImage(inlineStyleAvatar)

            }
            setCountFiles(fileList.length);
        }
    }

    return (
        <div className={classes[`wrap_${type}_${color}`] + ' ' + className} style={style}>
            <input 
            onChange={changeInputFile} 
            name={name} 
            className={classes.file}
            id={`${id_file_input}`} 
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
                <label htmlFor={`${id_file_input}`} 
                     className={classes.drop}
                     style={(Object.keys(styleImage).length != 0)?{background: 'none'}:{}}
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