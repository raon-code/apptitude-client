export default function Back({title, backClick}) {
    return (
        <div>
            <div onClick={backClick}>
                <button className="absolute top-5 left-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <line x1="19" x2="5" y1="12" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-center mt-5">
                {title && <span className="text-xl">{title}</span>}
            </div>
        </div>
    );
}