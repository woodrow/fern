/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.resources.users;

import com.seed.pagination.core.ClientOptions;
import com.seed.pagination.core.ObjectMappers;
import com.seed.pagination.core.QueryStringMapper;
import com.seed.pagination.core.RequestOptions;
import com.seed.pagination.core.SeedPaginationApiException;
import com.seed.pagination.core.SeedPaginationException;
import com.seed.pagination.core.SeedPaginationHttpResponse;
import com.seed.pagination.resources.users.requests.ListUsernamesRequestCustom;
import com.seed.pagination.types.UsernameCursor;
import java.io.IOException;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class RawUsersClient {
    protected final ClientOptions clientOptions;

    public RawUsersClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
    }

    public SeedPaginationHttpResponse<UsernameCursor> listUsernamesCustom() {
        return listUsernamesCustom(ListUsernamesRequestCustom.builder().build());
    }

    public SeedPaginationHttpResponse<UsernameCursor> listUsernamesCustom(ListUsernamesRequestCustom request) {
        return listUsernamesCustom(request, null);
    }

    public SeedPaginationHttpResponse<UsernameCursor> listUsernamesCustom(
            ListUsernamesRequestCustom request, RequestOptions requestOptions) {
        HttpUrl.Builder httpUrl = HttpUrl.parse(this.clientOptions.environment().getUrl())
                .newBuilder()
                .addPathSegments("users");
        if (request.getStartingAfter().isPresent()) {
            QueryStringMapper.addQueryParameter(
                    httpUrl, "starting_after", request.getStartingAfter().get(), false);
        }
        Request.Builder _requestBuilder = new Request.Builder()
                .url(httpUrl.build())
                .method("GET", null)
                .headers(Headers.of(clientOptions.headers(requestOptions)))
                .addHeader("Content-Type", "application/json")
                .addHeader("Accept", "application/json");
        Request okhttpRequest = _requestBuilder.build();
        OkHttpClient client = clientOptions.httpClient();
        if (requestOptions != null && requestOptions.getTimeout().isPresent()) {
            client = clientOptions.httpClientWithTimeout(requestOptions);
        }
        try (Response response = client.newCall(okhttpRequest).execute()) {
            ResponseBody responseBody = response.body();
            if (response.isSuccessful()) {
                return new SeedPaginationHttpResponse<>(
                        ObjectMappers.JSON_MAPPER.readValue(responseBody.string(), UsernameCursor.class), response);
            }
            String responseBodyString = responseBody != null ? responseBody.string() : "{}";
            throw new SeedPaginationApiException(
                    "Error with status code " + response.code(),
                    response.code(),
                    ObjectMappers.JSON_MAPPER.readValue(responseBodyString, Object.class),
                    response);
        } catch (IOException e) {
            throw new SeedPaginationException("Network error executing HTTP request", e);
        }
    }
}
