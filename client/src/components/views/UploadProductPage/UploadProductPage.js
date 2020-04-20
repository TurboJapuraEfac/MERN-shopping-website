import React from 'react'

function UploadProductPage() {
    return (
        <div style={{maxWidth:'700px', margin:'2rem auto'}}>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <h2>Upload Travel Product</h2>
            </div>

            <form onSubmit>
                {/* Drop Zone */}
                <br/>
                <br/>
                <label htmlFor="">Title</label>
                <input onChange
                        value   />
                        <br/>
                        <br/>
                <label htmlFor="">Description</label>
                <textarea onChange value></textarea>
                <br/>
                <br/>
                <label htmlFor="">Price(Rs)</label>
                <input onChange
                    value  type='number'/>
                <select name="" id="">
                    <option key value></option>
                </select>
                <br/>
                <br/>
                <button onClick>
                    Submit
                </button>


            </form>


        </div>
    )
}

export default UploadProductPage
