import { Button } from '../atoms';

const UploadImageForm = () => {
  return (
    <form id="register-form">
      <h1 className="mb-3 h3 display-1">Update Image</h1>
      <div className="mb-3">
        <div className="mb-3 input-group">
          <input
            type="file"
            className="pb-2 form-control"
            id="inputGroupFile02"
            autoComplete="off"
            required
          />
        </div>
        <Button type="submit">Update Image</Button>
      </div>
    </form>
  );
};

export default UploadImageForm;
