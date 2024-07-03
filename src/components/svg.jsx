import reactSvg from '../assets/svgs/react.svg'
import pythonSvg from '../assets/svgs/python.svg'
import nodeSvg from '../assets/svgs/nodejs.svg'
import mysqlSvg from '../assets/svgs/mysql.svg'
import mongodbSvg from '../assets/svgs/mongodb.svg'
import postmanSvg from '../assets/svgs/postman.svg'
import streamlitSvg from '../assets/svgs/streamlit.svg'
import vercelSvg from '../assets/svgs/vercel.svg'
import tailwindSvg from '../assets/svgs/tailwind.svg'
import reduxSvg from '../assets/svgs/redux.svg'
import expressSvg from '../assets/svgs/express.svg'
import djangoSvg from '../assets/svgs/django.svg'
import javaSvg from '../assets/svgs/java.svg'
import javascriptSvg from '../assets/svgs/javascript.svg'
import microsftSvg from '../assets/svgs/microsoft.svg'
import fastapiSvg from '../assets/svgs/fastapi.svg'
import dockerSvg from '../assets/svgs/docker.svg'
import notionSvg from '../assets/svgs/notion.svg'
import vscodeSvg from '../assets/svgs/vscode.svg'

export default function Svg() {
    return (
        <div className="grid grid-cols-10 gap-0.5 items-center justify-center">
            <img src={reactSvg} alt="react"  className='h-10 w-10' />
            <img src={pythonSvg} alt="python"  className='h-10 w-10' />
            <img src={nodeSvg} alt="node"  className='h-10 w-10' />
            <img src={mysqlSvg} alt="mysql"  className='h-10 w-10' />
            <img src={mongodbSvg} alt="mongodb"  className='h-10 w-10' />
            <img src={postmanSvg} alt="postman"  className='h-10 w-10' />
            <img src={streamlitSvg} alt="streamlit"  className='h-10 w-10' />
            <img src={vercelSvg} alt="vercel"  className='h-10 w-10' />
            <img src={tailwindSvg} alt="tailwind"  className='h-10 w-10' />
            <img src={reduxSvg} alt="redux"  className='h-10 w-10' />
            <img src={expressSvg} alt="express"  className='h-10 w-10' />
            <img src={djangoSvg} alt="django"  className='h-10 w-10' />
            <img src={javaSvg} alt="java"  className='h-10 w-10' />
            <img src={javascriptSvg} alt="javascript"  className='h-10 w-10' />
            <img src={microsftSvg} alt="microsoft"  className='h-10 w-10' />
            <img src={fastapiSvg} alt="fastapi"  className='h-10 w-10' />
            <img src={dockerSvg} alt="docker"  className='h-10 w-10' />
            <img src={notionSvg} alt="notion"  className='h-10 w-10' />
            <img src={vscodeSvg} alt="vscode"  className='h-10 w-10' />
        </div>
    )
}

