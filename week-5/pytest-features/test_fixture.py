import pytest

@pytest.fixture
def student():
  return {
    "name": "Shushu",
    "grades": [70, 33, 93, 47]
  }
  
def did_student_fail(student):
  return any(grade < 60 for grade in student["grades"])

def get_passing_grades(student):
  return list(filter(lambda x: x >= 60, student["grades"]))   # tests

def test_student_failed(student):
  assert did_student_fail(student), "Student did not fail"

def test_student_pass(student):
  assert len(get_passing_grades(student)) == 2, "Passing grades are incorrect" 
