// import logo from './logo.svg';
// import Password from 'antd/es/input/Password';
import './App.css';
import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Form</h1>
        <Form 
          autoComplete='off'
          labelCol={{ span: 10}} 
          wrapperCol={{ span: 14}}
          onFinish={(values)=>{
            console.log({values});
          }
          }
          onFinishFailed={(error) => {
            console.log({error});
          }}
          >
          <Form.Item 
          name="fullName"
           label="Full Name"
           rules={[
            {
              required: true,
              message: "Please enter your full name",
            },
            {whitespace: true,
              message: " name cannot be blank",
            },
            {min: 3, message: 'must be at least 3 characters'},
            
           ]}
           hasFeedback
           >
            <Input placeholder="Enter your name " />
          </Form.Item>

          
          <Form.Item
          
            name="email" 
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email address" ,
              },
              
              {type: 'email', message: 'please enter a valid email'},
           ]}
            hasFeedback
           >
            <Input placeholder= "Enter your email " />
          </Form.Item>

          <Form.Item name="password" label="Password"
            
            rules={[
              {
                required: true,
                message: " Password is required" ,

              },
              {min: 6},
              {
                validator:(_, value)=>
                value && value.includes("A")
                 ? Promise.resolve()
                 : Promise.reject('password does not match criteria')
              },
              
            ]}
            hasFeedback
            
          >
            <Input.Password placeholder="Enter your password " />
          </Form.Item>

          <Form.Item name="confirmPassword" label="Confirm Password"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: " Password is required",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value){
                    return Promise.resolve()
                  }
                  return Promise.reject( "The two passwords you entered does not match match")
                }
              })
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your Password " />
          </Form.Item>

          <Form.Item name="gender" label="Gender" requiredMark="optional" >
            <Select placeholder="Select your gender ">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="male">Female</Select.Option>
            </Select> 
          </Form.Item>

          <Form.Item name="dob" label="Date of birth" rules={[
              {
                required: true,
                message: "Please provide your date of birth" ,
              },
            ]}
            hasFeedback
           
          >
            
            <DatePicker
              style={{ width: '100%'}}
             picker="date" 
             placeholder='Chose date of birth ' />
          </Form.Item>

          <Form.Item name="website" label="Website" rules={[
              {type: 'url', message: 'please enter a valid url'},
           ]}
           hasFeedback  
          >
            
            <Input placeholder='Add your website ' />
          </Form.Item>

          <Form.Item name="agreement" wrapperCol={{ span: 24}} 
            valuePropName='checked'
            rules={[
                {
                  validator:(_, value)=>
                  value
                  ? Promise.resolve()
                  : Promise.reject('To proceed , you need to agree to our terms and conditions')
                },
                
            ]}>
            <Checkbox>Agree to our <a href='#'>Terms and conditions</a> </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24}}>
            <Button block type='primary' htmlType='submit'>Register</Button> 
          </Form.Item>
          
        </Form>
      </header>
    </div>
  );
}

export default App;

