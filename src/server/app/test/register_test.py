import unittest
from ..main.services.guest import guest_register


class RegisterTest(unittest.TestCase):

    def test_register_success(self):
        obj = {
            "firstname": "A",
            "lastname": "A",
            "email": "baricharul9@gmail.com",
            "password": "A",
            "phonenumber": 9999999
        }

        self.assertTrue(guest_register(obj))

    def test_register_error(self):
        obj={
            "lastname": "A",
            "email": "baricharul9@gmail.com",
            "password": "A",
            "phonenumber": 9999999
        }

        self.assertFalse(guest_register(obj))
    
    def test_register_empty(self):
        obj={
            "firstname": "",
            "lastname": "A",
            "email": "baricharul9@gmail.com",
            "password": "A",
            "phonenumber": 9999999
        }

        self.assertFalse(guest_register(obj))

    def test_register_type(self):
        obj={
            "firstname": 23,
            "lastname": "A",
            "email": "baricharul9@gmail.com",
            "password": "A",
            "phonenumber": 9999999
        }

        self.assertFalse(guest_register(obj))