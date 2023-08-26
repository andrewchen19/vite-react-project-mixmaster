// newsletter =（機構定期寄發給成員的）通訊，簡報
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  // console.log(request);

  // return Promise
  // formData here is the same as the instance of Form Data API
  const formData = await request.formData();
  // turn array of arrays into object
  const formObject = Object.fromEntries(formData);
  // console.log(formObject);

  // 老師提供的 url
  // 信箱必須輸入 test@test.com 才會得到 response
  try {
    const response = await axios.post(newsletterUrl, formObject);
    // console.log(response);
    toast.success(response.data.msg);
    // redirect is designed for action & loader
    return redirect("/");
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  // console.log(navigation)
  const isSubmit = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h3>Our Newsletter</h3>
      </div>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          placeholder="Andrew"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-input"
          placeholder="Chen"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          defaultValue="test@test.com"
          required
        />
      </div>
      <button type="submit" className="btn btn-block" disabled={isSubmit}>
        {isSubmit ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default Newsletter;
