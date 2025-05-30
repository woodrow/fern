# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import SyncClientWrapper
from .raw_client import RawServiceClient
import typing
from ..core.request_options import RequestOptions
from ..core.client_wrapper import AsyncClientWrapper
from .raw_client import AsyncRawServiceClient


class ServiceClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawServiceClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawServiceClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawServiceClient
        """
        return self._raw_client

    def post(self, endpoint_param: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters
        ----------
        endpoint_param : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        from seed import SeedVariables

        client = SeedVariables(
            base_url="https://yourhost.com/path/to/api",
        )
        client.service.post(
            endpoint_param="endpointParam",
        )
        """
        response = self._raw_client.post(endpoint_param, request_options=request_options)
        return response.data


class AsyncServiceClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawServiceClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawServiceClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawServiceClient
        """
        return self._raw_client

    async def post(self, endpoint_param: str, *, request_options: typing.Optional[RequestOptions] = None) -> None:
        """
        Parameters
        ----------
        endpoint_param : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        None

        Examples
        --------
        import asyncio

        from seed import AsyncSeedVariables

        client = AsyncSeedVariables(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.service.post(
                endpoint_param="endpointParam",
            )


        asyncio.run(main())
        """
        response = await self._raw_client.post(endpoint_param, request_options=request_options)
        return response.data
