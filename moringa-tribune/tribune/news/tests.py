from django.test import TestCase
from .models import Editor,Article,Tags
import datetime as dt
# Create your tests here.
class EditorTestClass(TestCase):

    # Set up method
    def setUp(self):
        self.ruth= Editor(first_name = 'Ruth', last_name ='Mugo', email ='ruthwanjiramugo@gmail.com')
    # Testing  instance
    def test_instance(self):
        self.assertTrue(isinstance(self.ruth,Editor))
 # Testing Save Method
    def test_save_method(self):
        self.ruth.save_editor()
        editors = Editor.objects.all()
        self.assertTrue(len(editors) > 0)

class ArticleTestClass(TestCase):

    # Set up method
    def setUp(self):
        self.like= Article(title = 'like', post ='Mugo')
    # Testing  instance
    def test_instance(self):
        self.assertTrue(isinstance(self.like,Article))
    # Testing Save Method
    def test_save_method(self):
        self.like.save_article()
        article = Article.objects.all()
        self.assertTrue(len(articles) > 0)   

class TagsTestClass(TestCase):

    # Set up method
    def setUp(self):
        self.fine= Tags(name = 'fine')
    # Testing  instance
    def test_instance(self):
        self.assertTrue(isinstance(self.fine,Tags))
    # Testing Save Method
    def test_save_method(self):
        self.fine.save_Tags()
        tags = Tags.objects.all()
        self.assertTrue(len(tags) > 0)   


class ArticleTestClass(TestCase):

    def setUp(self):
        # Creating a new editor and saving it
        self.ruth= Editor(first_name = 'Ruth', last_name ='Mugo', email ='ruthwanjiramugo@gmail.com')
        self.ruth.save_editor()

        # Creating a new tag and saving it
        self.new_Tag = Tags(name = 'testing')
        self.new_Tag.save()

        self.new_article= Article(title = 'Test Article',post = 'This is a random test Post',editor = self.ruth)
        self.new_article.save()

        self.new_article.Tags.add(self.new_Tag)

    def tearDown(self):
        Editor.objects.all().delete()
        Tags.objects.all().delete()
        Article.objects.all().delete()
    def test_get_news_today(self):
        today_news = Article.todays_news()
        self.assertTrue(len(today_news)>0)

    def test_get_news_by_date(self):
        test_date = '2017-03-17'
        date = dt.datetime.strptime(test_date, '%Y-%m-%d').date()
        news_by_date = Article.days_news(date)
        self.assertTrue(len(news_by_date) == 0)