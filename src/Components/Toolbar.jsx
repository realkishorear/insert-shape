import React from 'react'

const Toolbar = () => {
    return (
        <div className="bg-white h-full flex flex-col justify-center px-6">
            <h1 className="text-3xl text-slate-800 select-none mb-2">
                Insert Shape
            </h1>
            <div className="flex gap-4 select-none">
                {[{ icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-import-icon lucide-import"><path d="M12 3v12" /><path d="m8 11 4 4 4-4" /><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" /></svg>, name: 'Import' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload-icon lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>, name: 'Export' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>, name: 'Add Shapes' }].map((label) => (
                    <button
                        key={label}
                        className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    >
                        <div className='flex gap-1 items-center'>
                            {label.icon}
                            {label.name}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Toolbar
