import * as z from "zod";

export const AssetsSchema = z.object({
  large_image: z.string(),
  large_text: z.string(),
});
export type Assets = z.infer<typeof AssetsSchema>;

export const EmojiSchema = z.object({
  name: z.string(),
});
export type Emoji = z.infer<typeof EmojiSchema>;

export const PartySchema = z.object({
  id: z.string(),
});
export type Party = z.infer<typeof PartySchema>;

export const TimestampsSchema = z.object({
  start: z.number(),
  end: z.number(),
});
export type Timestamps = z.infer<typeof TimestampsSchema>;

export const AvatarDecorationDataSchema = z.object({
  sku_id: z.string(),
  asset: z.string(),
  expires_at: z.null(),
});
export type AvatarDecorationData = z.infer<typeof AvatarDecorationDataSchema>;

export const PrimaryGuildSchema = z.object({
  tag: z.null(),
  identity_guild_id: z.string(),
  badge: z.null(),
  identity_enabled: z.boolean(),
});
export type PrimaryGuild = z.infer<typeof PrimaryGuildSchema>;

export const KvSchema = z.object({});
export type Kv = z.infer<typeof KvSchema>;

export const SpotifySchema = z.object({
  timestamps: TimestampsSchema,
  album: z.string(),
  album_art_url: z.string(),
  artist: z.string(),
  song: z.string(),
  track_id: z.string(),
});
export type Spotify = z.infer<typeof SpotifySchema>;

export const ActivitySchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.number(),
  emoji: EmojiSchema.optional(),
  created_at: z.number(),
  flags: z.number().optional(),
  state: z.string().optional(),
  session_id: z.string().optional(),
  details: z.string().optional(),
  timestamps: TimestampsSchema.optional(),
  assets: AssetsSchema.optional(),
  sync_id: z.string().optional(),
  party: PartySchema.optional(),
});
export type Activity = z.infer<typeof ActivitySchema>;

export const DiscordUserSchema = z.object({
  id: z.string(),
  username: z.string(),
  avatar: z.string(),
  discriminator: z.string(),
  clan: z.null(),
  primary_guild: PrimaryGuildSchema,
  avatar_decoration_data: AvatarDecorationDataSchema,
  collectibles: z.null(),
  bot: z.boolean(),
  global_name: z.string(),
  display_name: z.string(),
  display_name_styles: z.null(),
  public_flags: z.number(),
});
export type DiscordUser = z.infer<typeof DiscordUserSchema>;

export const DataSchema = z.object({
  kv: KvSchema,
  discord_user: DiscordUserSchema,
  activities: z.array(ActivitySchema),
  discord_status: z.string(),
  active_on_discord_web: z.boolean(),
  active_on_discord_desktop: z.boolean(),
  active_on_discord_mobile: z.boolean(),
  active_on_discord_embedded: z.boolean(),
  listening_to_spotify: z.boolean(),
  spotify: SpotifySchema,
});
export type Data = z.infer<typeof DataSchema>;

export const DiscordPresenceSchema = z.object({
  data: DataSchema,
  success: z.boolean(),
});
export type DiscordPresence = z.infer<typeof DiscordPresenceSchema>;
