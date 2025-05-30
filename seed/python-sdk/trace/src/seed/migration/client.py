# This file was auto-generated by Fern from our API Definition.

from ..core.client_wrapper import SyncClientWrapper
from .raw_client import RawMigrationClient
import typing
from ..core.request_options import RequestOptions
from .types.migration import Migration
from ..core.client_wrapper import AsyncClientWrapper
from .raw_client import AsyncRawMigrationClient


class MigrationClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._raw_client = RawMigrationClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> RawMigrationClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        RawMigrationClient
        """
        return self._raw_client

    def get_attempted_migrations(
        self, *, admin_key_header: str, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[Migration]:
        """
        Parameters
        ----------
        admin_key_header : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[Migration]

        Examples
        --------
        from seed import SeedTrace

        client = SeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )
        client.migration.get_attempted_migrations(
            admin_key_header="admin-key-header",
        )
        """
        response = self._raw_client.get_attempted_migrations(
            admin_key_header=admin_key_header, request_options=request_options
        )
        return response.data


class AsyncMigrationClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._raw_client = AsyncRawMigrationClient(client_wrapper=client_wrapper)

    @property
    def with_raw_response(self) -> AsyncRawMigrationClient:
        """
        Retrieves a raw implementation of this client that returns raw responses.

        Returns
        -------
        AsyncRawMigrationClient
        """
        return self._raw_client

    async def get_attempted_migrations(
        self, *, admin_key_header: str, request_options: typing.Optional[RequestOptions] = None
    ) -> typing.List[Migration]:
        """
        Parameters
        ----------
        admin_key_header : str

        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        typing.List[Migration]

        Examples
        --------
        import asyncio

        from seed import AsyncSeedTrace

        client = AsyncSeedTrace(
            x_random_header="YOUR_X_RANDOM_HEADER",
            token="YOUR_TOKEN",
        )


        async def main() -> None:
            await client.migration.get_attempted_migrations(
                admin_key_header="admin-key-header",
            )


        asyncio.run(main())
        """
        response = await self._raw_client.get_attempted_migrations(
            admin_key_header=admin_key_header, request_options=request_options
        )
        return response.data
