import React, {Component} from 'react';

class APITest extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        this.tab1SelectLGrid()
    }

    tab1SelectLGrid () {
        var req = new XMLHttpRequest();
        req.open('POST', 'http://10.101.30.55:8000/smarta/test_django/exceltest/');
        req.send(null);
        req.onreadystatechange = function(e){
            if (this.status === 200) {
                var filename = "";
                var disposition = req.getResponseHeader("Content-Disposition"); // null 로 떨어지는 문제 발생
                if (disposition && disposition.indexOf('attachment') !== -1) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                }
                var type = req.getResponseHeader('Content-Type');

                var blob = typeof File === 'function'
                    ? new File([this.response], filename, { type: type })
                    : new Blob([this.response], { type: type });
                if (typeof window.navigator.msSaveBlob !== 'undefined') {
                    // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                    window.navigator.msSaveBlob(blob, filename);
                } else {
                    var URL = window.URL || window.webkitURL;
                    var downloadUrl = URL.createObjectURL(blob);

                    if (filename) {
                        // use HTML5 a[download] attribute to specify filename
                        var a = document.createElement("a");
                        // safari doesn't support this yet
                        if (typeof a.download === 'undefined') {
                            window.location = downloadUrl;
                        } else {
                            a.href = downloadUrl;
                            a.download = filename;
                            document.body.appendChild(a);
                            a.click();
                        }
                    } else {
                        window.location = downloadUrl;
                    }
                    setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h1>APITest</h1>
            </div>
        );
    }
}

export default APITest;