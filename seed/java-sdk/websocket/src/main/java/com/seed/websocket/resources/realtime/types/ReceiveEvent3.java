/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.websocket.resources.realtime.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.websocket.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ReceiveEvent3.Builder.class)
public final class ReceiveEvent3 {
    private final String receiveText3;

    private final Map<String, Object> additionalProperties;

    private ReceiveEvent3(String receiveText3, Map<String, Object> additionalProperties) {
        this.receiveText3 = receiveText3;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("receiveText3")
    public String getReceiveText3() {
        return receiveText3;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ReceiveEvent3 && equalTo((ReceiveEvent3) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ReceiveEvent3 other) {
        return receiveText3.equals(other.receiveText3);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.receiveText3);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ReceiveText3Stage builder() {
        return new Builder();
    }

    public interface ReceiveText3Stage {
        _FinalStage receiveText3(@NotNull String receiveText3);

        Builder from(ReceiveEvent3 other);
    }

    public interface _FinalStage {
        ReceiveEvent3 build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements ReceiveText3Stage, _FinalStage {
        private String receiveText3;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ReceiveEvent3 other) {
            receiveText3(other.getReceiveText3());
            return this;
        }

        @java.lang.Override
        @JsonSetter("receiveText3")
        public _FinalStage receiveText3(@NotNull String receiveText3) {
            this.receiveText3 = Objects.requireNonNull(receiveText3, "receiveText3 must not be null");
            return this;
        }

        @java.lang.Override
        public ReceiveEvent3 build() {
            return new ReceiveEvent3(receiveText3, additionalProperties);
        }
    }
}
