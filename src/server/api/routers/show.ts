import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { createShowZodSchema } from "~/common/zod/create-show.zod";

export const showRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createShowZodSchema)
    .mutation(async ({ ctx, input }) => {
      console.log(input);
      const { title, description, date, thumbnail } = input;

      try {
        return await ctx.db.show.create({
          data: {
            ticketPrice: 5000,
            showTime: date,
            title,
            description,
            thumbnail,
            createdById: ctx.session.user.id,
          },
        });
      } catch (e: unknown) {
        console.log(e);
        console.log("error occured");
        return {
          error: "some error occured",
        };
      }
    }),

  get: protectedProcedure.query(async ({ ctx }) => {
    const shows = await ctx.db.show.findMany();
    return shows ?? [];
  }),
});
