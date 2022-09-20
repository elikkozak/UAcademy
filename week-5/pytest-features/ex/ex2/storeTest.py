import pytest

@pytest.fixture
def store():
    items = ("apple", "banana", "orange")
    amount = (2, 2, 1)
    return dict(zip(items, amount))


def buy_banana(store):
    store["banana"] += 1


def buy_two_bananas(store):
    store["banana"] += 2


def test_buy_banana(store):
    buy_banana(store)
    assert store["banana"] == 3

def test_buy_two_bananas(store):
    buy_two_bananas(store)
    assert store["banana"] == 4