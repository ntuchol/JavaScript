function createSchoolXML() {
    // Create a new XML document
    const doc = document.implementation.createDocument(null, "school", null);
    const schoolElement = doc.documentElement;

    // Add school details
    const nameElement = doc.createElement("name");
    nameElement.textContent = "Maplewood High School";
    schoolElement.appendChild(nameElement);

    const addressElement = doc.createElement("address");
    addressElement.textContent = "123 School Lane, Anytown";
    schoolElement.appendChild(addressElement);

    // Add students section
    const studentsElement = doc.createElement("students");
    schoolElement.appendChild(studentsElement);

    // Add individual students
    const student1 = doc.createElement("student");
    student1.setAttribute("id", "S001");
    studentsElement.appendChild(student1);

    const studentName1 = doc.createElement("name");
    studentName1.textContent = "Alice Smith";
    student1.appendChild(studentName1);

    const studentGrade1 = doc.createElement("grade");
    studentGrade1.textContent = "10";
    student1.appendChild(studentGrade1);

    const student2 = doc.createElement("student");
    student2.setAttribute("id", "S002");
    studentsElement.appendChild(student2);

    const studentName2 = doc.createElement("name");
    studentName2.textContent = "Bob Johnson";
    student2.appendChild(studentName2);

    const studentGrade2 = doc.createElement("grade");
    studentGrade2.textContent = "11";
    student2.appendChild(studentGrade2);

    // Add courses section
    const coursesElement = doc.createElement("courses");
    schoolElement.appendChild(coursesElement);

    // Add individual courses
    const course1 = doc.createElement("course");
    course1.setAttribute("id", "C101");
    coursesElement.appendChild(course1);

    const courseName1 = doc.createElement("name");
    courseName1.textContent = "Algebra I";
    course1.appendChild(courseName1);

    const courseTeacher1 = doc.createElement("teacherId");
    courseTeacher1.textContent = "T001";
    course1.appendChild(courseTeacher1);

    // Add teachers section
    const teachersElement = doc.createElement("teachers");
    schoolElement.appendChild(teachersElement);

    // Add individual teachers
    const teacher1 = doc.createElement("teacher");
    teacher1.setAttribute("id", "T001");
    teachersElement.appendChild(teacher1);

    const teacherName1 = doc.createElement("name");
    teacherName1.textContent = "Mr. Davis";
    teacher1.appendChild(teacherName1);

    const teacherSubject1 = doc.createElement("subject");
    teacherSubject1.textContent = "Mathematics";
    teacher1.appendChild(teacherSubject1);

    // Serialize the XML document to a string
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(doc);

    return xmlString;
}

// Example usage:
const schoolXML = createSchoolXML();
console.log(schoolXML);