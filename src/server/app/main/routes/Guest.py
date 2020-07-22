from . import guest

@guest.route("/login")
def Login():
    return "Guest Login"