from pydantic import RootModel
from dt import datetime
from core.datetime_utils import serialize_datetime


class MovieId(RootModel[str]):
    root: str

    def get_as_str() -> UUID:
        return self.root

    @staticmethod
    def from_str(value: str) -> MovieId:
        MovieId(root=value)

    class Config:
        frozen = True
        smart_union = True
        json_encoders = {datetime: serialize_datetime}
