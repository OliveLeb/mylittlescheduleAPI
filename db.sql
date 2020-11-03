CREATE TABLE tasks (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    task TEXT NOT NULL,
    is_done BOOLEAN NOT NULL,
    day DATE,
    hour TIME,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL,
    CONSTRAINT fk_users
    FOREIGN KEY(user_id)
    REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS refresh_token (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    user_id INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    expires DATE NOT NULL,
    created_at Date NOT NULL DEFAULT CURRENT_DATE,
    createdByIp inet NOT NULL,
    CONSTRAINT fk_users
    FOREIGN KEY(user_id)
    REFERENCES users(id)
);