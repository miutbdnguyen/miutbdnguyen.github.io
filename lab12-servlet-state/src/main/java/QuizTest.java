import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

public class QuizTest {
    private Quiz quizUnderTest = new Quiz();;

    @Test
    public void testIsCorrect() {
        assertTrue("first question answer should be '9'", quizUnderTest.isCorrect("9"));
    }

    @Test
    public void testGetNumberQuestions() {
        assertEquals(5, quizUnderTest.getNumQuestions());
    }

    @Test
    public void testGetNumberCorrect() {
        assertEquals(0, quizUnderTest.getNumCorrect());

        quizUnderTest.scoreAnswer();
        assertEquals(1, quizUnderTest.getNumCorrect());
        assertEquals(1, quizUnderTest.getCurrentQuestionIndex());
    }
}
