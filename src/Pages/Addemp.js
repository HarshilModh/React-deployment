import React from 'react'

export const Addemp = () => {
    return (
        <div className="container my-3">
            <h3>ADD Employee</h3>

            <form >
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text"  class="form-control" placeholder="Enter name" />
                    

                </div>

                <div class="form-group">
                    <label for="salary">salary</label>
                    <input type="text"  class="form-control"  placeholder="Enter salary" />
                    
                </div>

                <button type="submit" class="btn btn-success my-3">Submit</button>
            </form>
        </div>
    )
}
