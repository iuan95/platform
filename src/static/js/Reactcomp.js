'use strict';
let root = ReactDOM.createRoot(document.querySelector('.forcitizens1'))

function menu__dropbox() {
    let myevent = ()=>{
        document.querySelector('.forcitizens__menu').classList.toggle('displaynone');
    }
    const myelement =(
        <div>
            <div className='forcitizens' onClick={myevent} >
                <div className="forcitizens__logo">
                    <img src="./../img/G.svg" className="G__style"/>
                </div>
                <span>Для граждан</span>
                <i>
                    <img src="./../img/Vector1.svg" className="Vector1__style"/>
                </i>
            </div>

            <div className='forcitizens__menu'>
                <ul>
                    <li>
                        <a href="#" className='state__icons'>Для граждан</a>
                    </li>
                    <li>
                        <a href='#' className='state__icons'> Для бизнеса</a>
                    </li>
                    <li>
                        <a ohref="#" className='state__icons'> Для ИОГВ</a>
                    </li>
                </ul>
            </div>
        </div>)
    return myelement
}
root.render(menu__dropbox());
