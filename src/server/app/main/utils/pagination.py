from math import ceil


def pagination(length, page):
    per_page = 10
    total_pages = ceil(length/per_page)

    if page > total_pages:
        return False,"",""

    start = (page - 1)*per_page
    end = page * per_page

    return total_pages, start, end
