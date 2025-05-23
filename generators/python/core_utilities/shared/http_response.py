from typing import Dict, Generic, TypeVar

import httpx

T = TypeVar("T")


class HttpResponse(Generic[T]):
    _response: httpx.Response
    _data: T

    def __init__(self, response: httpx.Response, data: T):
        self._response = response
        self._data = data

    @property
    def headers(self) -> Dict[str, str]:
        return dict(self._response.headers)

    @property
    def data(self) -> T:
        return self._data

    def close(self) -> None:
        self._response.close()


class AsyncHttpResponse(Generic[T]):
    _response: httpx.Response
    _data: T

    def __init__(self, response: httpx.Response, data: T):
        self._response = response
        self._data = data

    @property
    def headers(self) -> Dict[str, str]:
        return dict(self._response.headers)

    @property
    def data(self) -> T:
        return self._data

    async def close(self) -> None:
        await self._response.aclose()
