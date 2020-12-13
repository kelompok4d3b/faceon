import React from 'react';

const Daftar = () => {

    return (
        <div style={{marginTop: "10px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h4>Let Us Know About You</h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="form-gorup">
                                 <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="your firs tname" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="your last name" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" placeholder="0000-0000-0000" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="email" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="password" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="text" placeholder="confirm your password" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label>
                                        Gender
                                    </label>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-outline-danger">Female</button>
                                    <button type="button" className="btn btn-outline-primary">Male</button>
                                </div>

                                <button className="btn btn-secondary">Sign Up</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Daftar