# This file was auto-generated by Fern from our API Definition.

from ....core.abstract_fern_service import AbstractFernService
import typing
from ..types.user import User
import abc
from .create_user_request import CreateUserRequest
from .delete_user_request import DeleteUserRequest
import fastapi
import inspect
from ....core.exceptions.fern_http_exception import FernHTTPException
import logging
import functools
from ....core.route_args import get_route_args


class AbstractNullableService(AbstractFernService):
    """
    AbstractNullableService is an abstract class containing the methods that you should implement.

    Each method is associated with an API route, which will be registered
    with FastAPI when you register your implementation using Fern's register()
    function.
    """

    @abc.abstractmethod
    def get_users(
        self,
        *,
        usernames: typing.Optional[typing.List[str]] = None,
        avatar: typing.Optional[str] = None,
        activated: typing.Optional[typing.List[bool]] = None,
        tags: typing.Optional[typing.List[str]] = None,
        extra: typing.Optional[bool] = None,
    ) -> typing.Sequence[User]: ...

    @abc.abstractmethod
    def create_user(self, *, body: CreateUserRequest) -> User: ...

    @abc.abstractmethod
    def delete_user(self, *, body: DeleteUserRequest) -> bool: ...

    """
    Below are internal methods used by Fern to register your implementation.
    You can ignore them.
    """

    @classmethod
    def _init_fern(cls, router: fastapi.APIRouter) -> None:
        cls.__init_get_users(router=router)
        cls.__init_create_user(router=router)
        cls.__init_delete_user(router=router)

    @classmethod
    def __init_get_users(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.get_users)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "usernames":
                new_parameters.append(parameter.replace(default=fastapi.Query(default=None)))
            elif parameter_name == "avatar":
                new_parameters.append(parameter.replace(default=fastapi.Query(default=None)))
            elif parameter_name == "activated":
                new_parameters.append(parameter.replace(default=fastapi.Query(default=None)))
            elif parameter_name == "tags":
                new_parameters.append(parameter.replace(default=fastapi.Query(default=None)))
            elif parameter_name == "extra":
                new_parameters.append(parameter.replace(default=fastapi.Query(default=None)))
            else:
                new_parameters.append(parameter)
        setattr(cls.get_users, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.get_users)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> typing.Sequence[User]:
            try:
                return cls.get_users(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'get_users' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.get_users.__globals__)

        router.get(
            path="/users",
            response_model=typing.Sequence[User],
            description=AbstractNullableService.get_users.__doc__,
            **get_route_args(cls.get_users, default_tag="nullable"),
        )(wrapper)

    @classmethod
    def __init_create_user(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.create_user)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.create_user, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.create_user)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> User:
            try:
                return cls.create_user(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'create_user' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.create_user.__globals__)

        router.post(
            path="/users",
            response_model=User,
            description=AbstractNullableService.create_user.__doc__,
            **get_route_args(cls.create_user, default_tag="nullable"),
        )(wrapper)

    @classmethod
    def __init_delete_user(cls, router: fastapi.APIRouter) -> None:
        endpoint_function = inspect.signature(cls.delete_user)
        new_parameters: typing.List[inspect.Parameter] = []
        for index, (parameter_name, parameter) in enumerate(endpoint_function.parameters.items()):
            if index == 0:
                new_parameters.append(parameter.replace(default=fastapi.Depends(cls)))
            elif parameter_name == "body":
                new_parameters.append(parameter.replace(default=fastapi.Body(...)))
            else:
                new_parameters.append(parameter)
        setattr(cls.delete_user, "__signature__", endpoint_function.replace(parameters=new_parameters))

        @functools.wraps(cls.delete_user)
        def wrapper(*args: typing.Any, **kwargs: typing.Any) -> bool:
            try:
                return cls.delete_user(*args, **kwargs)
            except FernHTTPException as e:
                logging.getLogger(f"{cls.__module__}.{cls.__name__}").warn(
                    f"Endpoint 'delete_user' unexpectedly threw {e.__class__.__name__}. "
                    + f"If this was intentional, please add {e.__class__.__name__} to "
                    + "the endpoint's errors list in your Fern Definition."
                )
                raise e

        # this is necessary for FastAPI to find forward-ref'ed type hints.
        # https://github.com/tiangolo/fastapi/pull/5077
        wrapper.__globals__.update(cls.delete_user.__globals__)

        router.delete(
            path="/users",
            response_model=bool,
            description=AbstractNullableService.delete_user.__doc__,
            **get_route_args(cls.delete_user, default_tag="nullable"),
        )(wrapper)
