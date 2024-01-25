import { Component } from "react";
import '../CCTable.css'  //moves two levels up from the Class Comps folder.

export default class CCTable extends Component {
    constructor() {
        super();
        this.state = {
            width: '100%'
        };
    }

    widthChng = () => {
        this.setState({ width: '50%' });
    }
    widthBack = () => {
        this.setState({ width: '100%' })
    }

    render() {
        return (
            <table style={{
                width: this.state.width,
                borderCollapse: 'collapse',
                border: '1px solid black',
                height: 100
            }}
            >
                <tbody onClick={this.widthChng} onDoubleClick={this.widthBack}>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        );

    }
}