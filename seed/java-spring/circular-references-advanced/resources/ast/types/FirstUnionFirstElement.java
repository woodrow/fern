/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.ast.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = FirstUnionFirstElement.Builder.class
)
public final class FirstUnionFirstElement {
  private final SecondUnion child;

  private FirstUnionFirstElement(SecondUnion child) {
    this.child = child;
  }

  @JsonProperty("child")
  public SecondUnion getChild() {
    return child;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof FirstUnionFirstElement && equalTo((FirstUnionFirstElement) other);
  }

  private boolean equalTo(FirstUnionFirstElement other) {
    return child.equals(other.child);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.child);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static ChildStage builder() {
    return new Builder();
  }

  public interface ChildStage {
    _FinalStage child(@NotNull SecondUnion child);

    Builder from(FirstUnionFirstElement other);
  }

  public interface _FinalStage {
    FirstUnionFirstElement build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements ChildStage, _FinalStage {
    private SecondUnion child;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(FirstUnionFirstElement other) {
      child(other.getChild());
      return this;
    }

    @java.lang.Override
    @JsonSetter("child")
    public _FinalStage child(@NotNull SecondUnion child) {
      this.child = Objects.requireNonNull(child, "child must not be null");
      return this;
    }

    @java.lang.Override
    public FirstUnionFirstElement build() {
      return new FirstUnionFirstElement(child);
    }
  }
}
