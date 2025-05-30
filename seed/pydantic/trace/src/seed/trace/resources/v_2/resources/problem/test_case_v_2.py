# This file was auto-generated by Fern from our API Definition.

from .....core.pydantic_utilities import UniversalBaseModel
from ....commons.list_type import ListType
from ....commons.map_type import MapType
from .test_case_metadata import TestCaseMetadata
from .test_case_implementation_reference import TestCaseImplementationReference
import typing
from .parameter_id import ParameterId
from ....commons.variable_value import VariableValue
from .test_case_expects import TestCaseExpects
from .....core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class TestCaseV2(UniversalBaseModel):
    metadata: TestCaseMetadata
    implementation: TestCaseImplementationReference
    arguments: typing.Dict[ParameterId, VariableValue]
    expects: typing.Optional[TestCaseExpects] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow")  # type: ignore # Pydantic v2
    else:

        class Config:
            extra = pydantic.Extra.allow
