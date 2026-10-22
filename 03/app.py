"""
Student Grade Calculator Application
A simple, testable Python application for Jenkins CI integration.
"""

def calculate_grade(marks):
    """Returns grade letter based on marks (0 to 100)."""
    if not (0 <= marks <= 100):
        raise ValueError("Marks must be between 0 and 100.")
    if marks >= 90:
        return 'A+'
    elif marks >= 80:
        return 'A'
    elif marks >= 70:
        return 'B'
    elif marks >= 60:
        return 'C'
    elif marks >= 50:
        return 'D'
    else:
        return 'F'

def calculate_average(scores):
    """Calculates average score from a list of numbers."""
    if not scores:
        return 0.0
    return sum(scores) / len(scores)

def is_passed(marks):
    """Returns True if marks are 50 or above, otherwise False."""
    return marks >= 50

if __name__ == '__main__':
    sample_scores = [85, 92, 78, 64, 90]
    avg = calculate_average(sample_scores)
    grade = calculate_grade(avg)
    print("=" * 45)
    print("      STUDENT PERFORMANCE REPORT (JENKINS)     ")
    print("=" * 45)
    print(f"Scores Recorded: {sample_scores}")
    print(f"Average Score  : {avg:.2f}")
    print(f"Final Grade    : {grade}")
    print(f"Result Status  : {'PASSED' if is_passed(avg) else 'FAILED'}")
    print("=" * 45)
    print("Build & Execution completed successfully!")
