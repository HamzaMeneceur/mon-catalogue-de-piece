BEGIN;

DROP TABLE IF EXISTS "medal", "piece", "user", "similize";

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "pseudo" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ default now(),
    "update_at" TIMESTAMPTZ
);

CREATE TABLE "medal" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "country" TEXT,
    "years" INTEGER,
    "description" TEXT,
    "estimated_price" TEXT NOT NULL,
    "image" TEXT,
    "sold" TEXT,
    "user_id" INTEGER REFERENCES "user" ("id") ON DELETE CASCADE
);

CREATE TABLE "piece" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "country" INTEGER,
    "years" INTEGER,
    "description" TEXT,
    "estimated_price" TEXT NOT NULL,
    "image" TEXT,
    "values" INTEGER NOT NULL,
    "sold" TEXT,
    "user_id" INTEGER REFERENCES "user"("id") ON DELETE CASCADE
);

CREATE TABLE "similize" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "medal_id" INTEGER REFERENCES "medal" ("id") ON DELETE CASCADE,
    "piece_id" INTEGER REFERENCES "piece" ("id") ON DELETE CASCADE,
    "speciality" TEXT
);

COMMIT;