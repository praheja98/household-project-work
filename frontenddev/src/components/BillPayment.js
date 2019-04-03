import React,{Component} from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import '../App.css';
import uuid from 'uuid/v4';
class BillPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {member:[],test:[],household:'',amount:'',date:'',
            type:'',paymentId:''};
        this.inviteMem = this.inviteMem.bind(this);
        this.handleAmountDue = this.handleAmountDue.bind(this);
        this.handleDateDue = this.handleDateDue.bind(this);
        this.handlePaymentType = this.handlePaymentType.bind(this);
    }

    handleAmountDue(event) {
        event.preventDefault();
        this.setState({amount:event.target.value});
    }

    handleDateDue(event) {
        event.preventDefault();
        this.setState({date:event.target.value});

    }

    handlePaymentType(event) {
        event.preventDefault();
        this.setState({type:event.target.value});
    }

    inviteMem(event) {
        event.preventDefault();
        var householdName = this.state.household;
        this.props.history.push(`/invite/${householdName}`)
    } 

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3017/makepayment',{
            method:'POST',
            credentials:'include',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                date:this.state.date,
                amount:this.state.amount,
                paymentId:this.state.paymentId,
                household:this.state.household,
                type:this.state.type,



            })
        })
        .then(response => response.json())
        .then(data => {

        })


    }

    componentDidMount() {
        console.log(this.props.location.state.data);
        console.log('final test');
        this.setState({member:this.props.location.state.data.member});
        this.setState({household:this.props.location.state.data.householdName});
        var paymentId = uuid();
        this.setState({paymentId});
    }

    render() {

        return (
            <div className='billpayment-container' style={{backgroundColor:'coral'}}>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Enter Payment Type
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type='text' placeholder='Enter Payment Type' onChange={this.handlePaymentType}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Enter Amount Due
                </Form.Label>
                <Col sm={10}>   
                    <Form.Control type='text' placeholder='Enter Amount Due' onChange={this.handleAmountDue}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                   Enter Date Due
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type='date' placeholder='Enter Date Due' onChange={this.handleDateDue} />
                </Col>
            </Form.Group>
            
           
            <Form.Group>
                <Form.Label>
                    Select the members you would like to split with
                </Form.Label>
                {
                    this.state.member.map(mem => (
                        <Form.Check name='person' value={mem.username} label={mem.username}/>
                    ))
                }
              
               
            </Form.Group>
            <Button variant='primary' type='submit'> Make Payment </Button> <br />
            <Button variant='primary' onClick={this.inviteMem}> Click here to invite Members </Button>   
            </Form>
            </div>

        )

    }



}

export default BillPayment;