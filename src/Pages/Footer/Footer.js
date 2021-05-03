import "./Footer.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Footer = () => {
  return (
    <div className="rodape">
      <footer className="form-footer">
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              <strong>RECEBA OFERTAS POR EMAIL</strong>
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="something@idk.cool"
            />
          </FormGroup>
          <Button>Submit</Button>
          <h5 className="h5-footer"> Sinclear copyright©</h5>
        </Form>
      </footer>
    </div>
  );
};

export default Footer;
