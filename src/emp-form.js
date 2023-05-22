import { html, css, LitElement } from "lit";

class EmpForm extends LitElement {
  static styles = css`
    .form-center {
      color: white;
    }

    h2 {
      font-family: Georgia ;
      margin-bottom: 10px;
      font-weight: 900;
    }

    form {
      width: 650px;
      border: 1px solid white;
      border-radius: 20px;
      padding: 30px;
      margin: 50px auto;
      background: #454545;
    }

    label {
      display: inline;
      margin-top: 10px;
      font-family: Arial;
      font-weight: 700;
    }

    input[type="text"],
    input[type="email"] {
      padding: 5px;
      margin-top: 5px;
      border: 1px solid black;
      border-radius: 3px;
    }

    button {
      display: block;
      width: 30%;
      border-radius: 10px;
      background-color: #04aa6d;
      color: white;
      padding: 14px 28px;
      font-size: 20px;
      cursor: pointer;
      text-align: center;
      margin: 20px auto;
    }

    select {
      width: 100%;
      height: 27px;
      margin: 5px 0 0;
      padding: 5px;
      background: white;
      border: 1px solid;
      border-radius: 4px;
    }
  `;

  static properties = {
    fullName: { type: String },
    employeeCode: { type: String },
    officialEmail: { type: String },
    personalEmail: { type: String },
    designation: { type: String },
    department: { type: String },
    addressLine1: { type: String },
    addressLine2: { type: String },
    landmark: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zip: { type: String },
  };

  constructor() {
    super();
    this.fullName = "";
    this.employeeCode = "";
    this.officialEmail = "";
    this.personalEmail = "";
    this.designation = "";
    this.department = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.landmark = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zip = "";
  }

  render() {
    return html`
      <div class="form-center">
        <form @submit="${this.handleSubmit}">
          <h2>Employee Data Form</h2>
          <table>
            <tr>
              <td>
                <label for="fullName"> Full Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="fullName"
                  .value="${this.fullName}"
                  @input="${this.handleInputChange}"
                  required
                  maxlength="40"
                /><br />
              </td>

              <td>
                <label for="employeeCode">Employee Code:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="employeeCode"
                  .value="${this.employeeCode}"
                  @input="${this.handleInputChange}"
                  required
                  pattern="[A-Za-z][0-9]{6}"
                /><br />
              </td>
            </tr>
            <tr>
              <td>
                <label for="officialEmail">Official Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="officialEmail"
                  .value="${this.officialEmail}"
                  @input="${this.handleInputChange}"
                  required
                /><br />
              </td>

              <td>
                <label for="personalEmail">Personal Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="personalEmail"
                  .value="${this.personalEmail}"
                  @input="${this.handleInputChange}"
                  required
                /><br />
              </td>
            </tr>

            <tr>
              <td>
                <label> Designation: </label>
              </td>
              <td>
                <select
                  id="designation"
                  .value="${this.designation}"
                  @input="${this.handleInputChange}"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                </select>
              </td>

              <td>
                <label> Department: </label>
              </td>
              <td>
                <select
                  id="department"
                  .value="${this.department}"
                  @input="${this.handleInputChange}"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="Technology">Technology</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </td>
            </tr>
            
               <tr> <td><h2>Address</h2></td></tr>
             

            <tr>
              <td>
                <label for="addressLine1">Address Line 1:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="addressLine1"
                  .value="${this.addressLine1}"
                  @input="${this.handleInputChange}"
                  required
                  maxlength="80"
                /><br />
              </td>
              <td>
                <label for="addressLine2">Address Line 2:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="addressLine2"
                  .value="${this.addressLine2}"
                  @input="${this.handleInputChange}"
                /><br />
              </td>
            </tr>

            <tr>
              <td>
                <label for="landmark">Landmark:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="landmark"
                  .value="${this.landmark}"
                  @input="${this.handleInputChange}"
                  required
                  maxlength="50"
                /><br />
              </td>

              <td>
                <label for="city">City:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="city"
                  .value="${this.city}"
                  @input="${this.handleInputChange}"
                  required
                /><br />
              </td>
            </tr>

            <tr>
              <td>
                <label for="state">State:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="state"
                  .value="${this.city}"
                  @input="${this.handleInputChange}"
                  required
                /><br />
              </td>
              <td>
                <label for="country">Country:</label>
              </td>
              <td>
                <input
                  id="country"
                  type="text"
                  .value="${this.country}"
                  @input="${this.handleInputChange}"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label for="zip">Zip:</label>
              </td>
              <td>
                <input
                  id="zip"
                  type="text"
                  .value="${this.zip}"
                  @input="${this.handleInputChange}"
                  required
                /><br />
              </td>
            </tr>
          </table>

          <button >Submit</button>
      
        </form>
      </div>
    `;
  }

  handleInputChange(event) {
    const inputName = event.target.id;
    this[inputName] = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("success ...");
    const empData = {
      fullName: this.fullName,
      employeeCode: this.employeeCode,
      officialEmail: this.officialEmail,
      personalEmail: this.personalEmail,
      designation: this.designation,
      department: this.department,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      landmark: this.landmark,
      city: this.city,
      state: this.state,
      country: this.country,
      zip: this.zip,
    };
    this.saveAddressToLocalStorage(empData);
  }

  saveAddressToLocalStorage(empData) {
    const existingEmpData = JSON.parse(localStorage.getItem("empData")) || [];
    existingEmpData.push(empData);
    localStorage.setItem("empData", JSON.stringify(existingEmpData));
    this.clearForm();
    console.log("Address saved to local storage:", empData);
  }

  clearForm() {
    this.fullName = "";
    this.employeeCode = "";
    this.officialEmail = "";
    this.personalEmail = "";
    this.designation = "";
    this.department = "";
    this.addressLine1 = "";
    this.addressLine2 = "";
    this.landmark = "";
    this.city = "";
    this.state = "";
    this.country = "";
    this.zip = "";
  }
}

customElements.define("emp-form", EmpForm);
