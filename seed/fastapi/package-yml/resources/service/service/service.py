# This file was auto-generated by Fern from our API Definition.

from ....core.abstract_fern_service import AbstractFernService
import abc
import fastapi
import inspect
import typing
from ....core.exceptions.fern_http_exception import FernHTTPException
import logging
import functools
import starlette
from ....core.route_args import get_route_args


class AbstractServiceService(AbstractFernService):
    """
    AbstractServiceService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def nop(self, *, nested_id: str) -> None: ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_nop(router=router)

    @classmethod
    def __init_nop(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.nop)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "nested_id":
                new_parameters.append(parameter.replace(default=fastapi.Path(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.nop, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.nop)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> None:
            try:
                return cls.nop(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'nop' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.nop.__globals__)

        router.get(
            path="/{id}//{nested_id}",
            response_model=None,
            status_code=starlette.status.HTTP_204_NO_CONTENT,
            description=AbstractServiceService.nop.__doc__,
            **get_route_args(cls.nop, default_tag="service"),
        )(wrapper)
