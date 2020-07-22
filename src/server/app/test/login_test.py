import unittest
from ..main.services.guest import guest_login


class LoginTest(unittest.TestCase):

    def test_login_success(self):
        obj = {
            "email": "baricharul9@gmail.com",
            "password": "A",
        }

        self.assertTrue(guest_login(obj))

    def test_login_error(self):
        obj={
            "password": "A",
        }

        self.assertFalse(guest_login(obj))
    
    def test_login_empty(self):
        obj={
            "email": "",
            "password": "A"
        }

        self.assertFalse(guest_login(obj))

    def test_login_type(self):
        obj={
            "email": 24,
            "password": "A",
        }

        self.assertFalse(guest_login(obj))