import React from "react";
import "./Content.css"
import avatar from "./../media/avatar.jpg"

export function Content() {
    return <div className={'Content'}>
        <div>
            <img alt={'avatar'} src={avatar}/>
            <div className={'description'}>
                Description
            </div>
        </div>
        <div>
            <textarea placeholder={'Send your messages'}/>
            <button>Send</button>
        </div>
        <div>
            Posts
        </div>
    </div>
}