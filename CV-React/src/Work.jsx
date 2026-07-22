import React from "react";
import "./Work.css";

function Work() {
    return (
        <div className="workContainer">
            <div className="workleft">
                <p className="cbe">
                    Dec 2025 - Present <br />
                    <strong>Database Engineer</strong> <br />
                    CBE
                </p>
                <p className="insa">
                    Feb 2025 - March 2026 <br />
                    <strong>Software Developer</strong> <br />
                    INSA
                </p>
                <p className="ison">
                    Aug 2024 - Dec 2024 <br />
                    <strong>Customer Service Representative</strong> <br />
                    iSON Xperiences
                </p>
                <p className="amn">
                    Jul 2023 - Sep 2023 <br />
                    <strong>IT technician </strong> <br />
                    AMN
                </p>
            </div>
            <div className="workright">
                <p className="dba">
                    CBE has been a place to learn and work on the following so far:-
                    <ul>
                        <li>Oracle Database</li>
                        <li>SQL Servers</li>
                        <li>Oracle Virtual Box and Oracle Linux OS VMs</li>
                    </ul>
                </p>
                <p className="dev">
                    After joining INSA, I have been assigned to secure digital payment division.
                    I am working as a software developer on a locally developed system called Derash which is a National Billing Payment System (NBPS).
                </p>
                <p className="csr">
                    During my 5-month tenure at iSON Xperiences, I provided technical support and assistance to Safaricom Ethiopia customers,
                    addressing their inquiries and resolving issues related to network usage and MPesa.
                </p>
                <p className="it">
                    I have spent my internship period working at Addis Media Network as an IT technician and Network Administrator.
                    I worked under department of hardware maintenance and Networking.
                </p>
            </div>
        </div>
    )
};

export default Work;