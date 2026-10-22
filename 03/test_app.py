import unittest
from app import calculate_grade, calculate_average, is_passed

class TestStudentApp(unittest.TestCase):

    def test_calculate_grade_A(self):
        self.assertEqual(calculate_grade(95), 'A+')
        self.assertEqual(calculate_grade(85), 'A')

    def test_calculate_grade_pass_fail(self):
        self.assertEqual(calculate_grade(55), 'D')
        self.assertEqual(calculate_grade(42), 'F')

    def test_invalid_marks_exception(self):
        with self.assertRaises(ValueError):
            calculate_grade(105)
        with self.assertRaises(ValueError):
            calculate_grade(-5)

    def test_calculate_average(self):
        scores = [80, 90, 70]
        self.assertAlmostEqual(calculate_average(scores), 80.0)
        self.assertEqual(calculate_average([]), 0.0)

    def test_is_passed(self):
        self.assertTrue(is_passed(50))
        self.assertTrue(is_passed(75))
        self.assertFalse(is_passed(49))

if __name__ == '__main__':
    unittest.main()
