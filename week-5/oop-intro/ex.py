import string


class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}

    def save(self, name, url):

        self.lessons[self.remove_punctuation(name.lower())] = url.replace(
            "https://www.youtube.com/watch?v=", "")

    # def get(self,name):
    #     return self.lessons.get(self.remove_punctuation(name.lower()))

    def get(self, name):
        new_name = self.remove_punctuation(name.lower())
        return list(map(lambda url_name: "https://www.youtube.com/watch?v=" + self.lessons[url_name], list(filter(lambda s: new_name in s, self.lessons.keys()))))

    def remove_punctuation(self, name):
        punctuation = string.punctuation
        return name.translate(str.maketrans('', '', punctuation + " "))


lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.save("While-Loops", "https://www.youtube.com/watch?v=AAAAAAAAA")
lesson_manager.remove_punctuation("For-Loops")
print(string.punctuation)
# outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}
# print(lesson_manager.lessons)
# print(lesson_manager.lessons["For-Loops"]) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("For-Loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("loops"))
# print(lesson_manager.get("fOr-LooPS")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}
# print(lesson_manager.lessons)
