import React, { useState, ChangeEvent, FormEvent } from 'react'

const FileUploadForm: React.FC = () => {
    const [file, setFile] = useState<File | null>(null)
    const [message, setMessage] = useState<string>('')

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0])
        }
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()

        if (!file) {
            setMessage('Please select a file first')
            return
        }

        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()

            if (response.ok) {
                setMessage(`File uploaded successfully: ${result.filepath}`)
            } else {
                setMessage(`Error: ${result.error}`)
            }
        } catch (error) {
            setMessage('Error uploading file')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default FileUploadForm
